// Access control functions
const access = {};

access.userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
access.userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};

access.userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
module.exports = access;
