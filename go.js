const { redibase } =require('./src/connect')

const runner = async () => {
    console.log(1)
    await redibase.set('name1', 'holom')
    console.log(2)
    const name1 = await redibase.get('name1')
    console.log(3)
    console.log(name1)
}

runner()


