const User = require('../models/user')

const disableOnboarding = async (id) => {
  const result = await User.findOneAndUpdate({
    userId: id,
    onboarding: false,
    new: true
  })
    .then((resp) => !!resp)
    .catch((err) => err)
  return result
}

export = disableOnboarding
