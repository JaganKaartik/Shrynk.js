const User = require('../models/user')

/* Function that sets onboaring value to false in User Model */
const disableOnboarding = async (id) => {
  const result = await User.findOneAndUpdate(
    {
      userId: id
    },
    {
      $set: { onboarding: false }
    }
  )
    .then((resp) => !!resp)
    .catch((err) => err)
  return result
}

export = disableOnboarding
