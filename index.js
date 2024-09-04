const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('mesh la2eeh ya SA7BY :<');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('mesh 3aref AKTEBBB :<');
      resolve('NAGAA7');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const res1Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Pro = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);
    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('random dog saved');
  } catch (error) {
    console.log(error);
  }
  return '2:READY';
};

(async () => {
  try {
    console.log('1:will get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('3:Done');
  } catch (error) {
    console.log('Error');
  }
})();

/*
console.log('1:will get dog pics');
getDogPic().then((x) => {
  console.log(x);
  console.log('3:Done');
}).catch((err) => {
    console.log("ERRORRR");
  });;
*/

/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then((data) => {
    console.log(data, 'random dog saved');
  })
  .catch((err) => {
    console.log(err.message);
  });
*/
