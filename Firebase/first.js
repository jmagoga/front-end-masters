//coisas que podemos acessar no snapshot: 
//docs, empty, metadata, query, size
//métodos:
//docChanges(), forEach(), isEqual()




useEffect(() => {
    async function getSnapshot() {
      const snapshot = await firestore.collection('businesses').get()
      console.log("snapshot: ", {snapshot})
    }
    getSnapshot()
  }, [])


//primeiro useEffect
useEffect(() => {
    async function getSnapshot() {
      const snapshot = await firestore.collection('businesses').get()
      snapshot.forEach(doc => {
      const id = doc.id
      const data = doc.data()

      console.log({ id, data })
      })
    }
    getSnapshot()
  }, [])

//segundo, já conseguindo recuperar dados da base de dados
useEffect(() => {
    async function getSnapshot() {
      const snapshot = await firestore.collection('businesses').get()
      // a lot of 'businesses' objects
      const businessesFromDatabase = snapshot.docs.map(doc => { 
        return { id: doc.id, ...doc.data()}
      })
                            //passando como um objeto. da para ser sem tb
      setBusinessesFromDatabase( businessesFromDatabase )
    }
    getSnapshot()
  }, [])
