export async function getRandomDog(): Promise<string | null> {
  try {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const {message} = await data.json();
    console.log(message);
    return message;
  } catch (error) {
    console.error(error);
    return null;
  }
}
