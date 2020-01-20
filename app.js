const app = new Vue({
  el: '#app',
  data: {
    title: 'Seussology',
    category: '',
    query: '',
    sortBy: 'title',
    selectedBook: false
  },
  computed: {
    books: function () {
      if (this.query) {
        return books.filter((book) =>
          book.title.toLowerCase().includes(this.query.toLowerCase())
        ).sort((a, b) => a[this.sortBy] - b[this.sortBy])
      }

      return books.slice(0).sort((a, b) => a[this.sortBy] - b[this.sortBy])
    }
  }
})
