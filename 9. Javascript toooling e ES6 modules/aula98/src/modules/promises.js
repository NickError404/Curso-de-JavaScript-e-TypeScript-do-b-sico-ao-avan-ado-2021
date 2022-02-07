function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('hey sou a promisse');
            resolve();
        }, 2000)
    });
}

export default async function () {
    await promise();
    console.log('Terminou');
}
