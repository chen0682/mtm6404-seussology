const app = new Vue({
  el: '#app',
  data: {
    title: 'Seussology',
    // books: books,
    category: '',
    query: '',
    sortBy: 'title'
  },
  computed: {
    books: function () {
      if (this.query) {
        /* const self = this
        return books.filter(function (book) {
          book.tittle.includes(self.query)// this inside the anonymous function refers to the window.
        }) */
        return books.filter(book => book.title.toLowerCase().includes(this.query.toLowerCase())).sort((a, b) => a[this.sortBy] - b[this.sortBy])
      }
      return books.slice(0).sort((a, b) => a[this.sortBy] - b[this.sortBy])
    }
  }

})
