const mapToUserModel = (user) => {
  return {
    title: user.title,
    subtitle: user.subtitle,
    description: user.description,
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.last,
    phone: user.phone,
    email: user.email,
    password:user.password,
    webUrl: user.web,
    url: user.image.url,
    alt: user.image.alt,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: user.address.houseNumber,
    zip: user.address.zip,
  };
};

export default mapToUserModel;
