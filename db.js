import M from 'mongoose'

const c = () => {
    M.connect(process.env.DB_URI,{
        dbName: 'lens',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log('Tabana bağlantı başarılı')
    }).catch((err)=>{
        console.log(`Bağlantı hatası::, ${err}`)
    })
}

export default c