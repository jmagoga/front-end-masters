useEffect(() => {
    async function getSnapshot() {
      const snapshot = await firestore.collection('businesses').get()
      console.log("snapshot: ", {snapshot})
    }
    getSnapshot()
  }, [])
