const AdminController = {
  index: (req, res) => {
    res.render('admin/index', { title: 'AdminPage' })
  }
}
module.exports = AdminController
