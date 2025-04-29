const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({ name, email, password, role: 'user' });
    user.password = await bcrypt.hash(password, 10);
    console.log('Saving user:', user);
    await user.save();
    console.log('User saved!');

    res.json({ user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ user: { name: user.name, email: user.email }, token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
