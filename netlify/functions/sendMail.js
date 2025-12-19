exports.handler = async function (event) {
  const data = JSON.parse(event.body);

  console.log("Mensaje recibido:", data);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Mail enviado" }),
  };
};