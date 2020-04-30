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


//writing to database and getting a single document out
handleCreate = async post => {
  const docRef = await firestore.collection('posts').add(post)
  const doc = await docRef.get()
  
  const newPost = collectIdsAndDocs(doc)
  
  this.setState({ posts: [newPost, ...posts] })
}


//delete from database
const handleRemove = async id => {
    const allBusinesses = businessesPendingApprovalFromDatabase
    //com interpolated strings, faz a rota e passa a id delete. depois chama o delete.
    await firestore.doc(`businessesPendingAdminApproval/${id}`).delete()

    const businesses = allBusinesses.filter(business => business.id !== id)
    setBusinessesPendingApprovalFromDatabase(businesses)
  }
