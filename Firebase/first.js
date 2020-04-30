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

//subscribing to database updates
//when the database changes, our UI changes
//tem que fazer isso funcionar porque será usado para a lavagem quando novos serviços são agendados
//tipo um twitter que mostra 'novo serviço agendado' https://stackoverflow.com/questions/61526184/how-to-translate-componentdidmound-and-componentwillunmount-to-useeffect-react/61526875#61526875
const collectIdsAndDocs = doc => { return { id: doc.id, ...doc.data() }

useEffect(() => {

    const unsubscribeApproved = firestore.collection('approvedBusinesses').onSnapshot(snapshot => {
      const approvedBiz = snapshot.docs.map(collectIdsAndDocs)
      setApprovedBusinesses(approvedBiz)
    })

    const unsubscribePending = firestore.collection('businessesPendingAdminApproval').onSnapshot(snapshot => {
      const pendingBiz = snapshot.docs.map(collectIdsAndDocs)
      setBusinessesPendingApproval(pendingBiz)
    })
    
    return () => { //retorna para fazer o unsubscribe
      unsubscribeApproved()
      unsubscribePending()
    }
  }, [])
                                  
                                  
  //mudei, POR CONTA, tudo par isso:
useEffect(() => {

    const unsubscribeApproved = firestore.collection('approvedBusinesses').onSnapshot(snapshot => {
      const approvedBiz = snapshot.docs.map(collectIdsAndDocs)
      setApprovedBusinesses(approvedBiz)
    })

    const unsubscribePending = firestore.collection('businessesPendingAdminApproval').onSnapshot(snapshot => {
      const pendingBiz = snapshot.docs.map(collectIdsAndDocs)
      setBusinessesPendingApproval(pendingBiz)
    })

    const unsubscribeRejected = firestore.collection('rejectedBusinesses').onSnapshot(snapshot => {
      const rejectedBiz = snapshot.docs.map(collectIdsAndDocs)
      setRejectedBusinesses(rejectedBiz)
    })

    //so that it stops listening even if user navigates away, avoid memory leak. stop listening after it mounts
    return () => {
      unsubscribeApproved()
      unsubscribePending()
      unsubscribeRejected()
    }
  }, [])

  //parece que o async await não é necessário
  const handleRemove = async item => {
    await firestore.collection(`rejectedBusinesses`).add(item) 
    await firestore.doc(`businessesPendingAdminApproval/${item.id}`).delete()
  }

  const handleAccept = async item => {
    await firestore.collection(`approvedBusinesses`).add(item) 
    await firestore.doc(`businessesPendingAdminApproval/${item.id}`).delete()
  }
  
  
  
  
  
  
  //
