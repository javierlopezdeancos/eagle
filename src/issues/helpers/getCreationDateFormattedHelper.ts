const getCreationDateFormattedHelper = (creationDate: string): string => {
  const date = new Date(creationDate);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("es-ES", options).format(date);
};

export default getCreationDateFormattedHelper;
