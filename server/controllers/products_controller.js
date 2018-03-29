module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, imageurl } = req.body;

    dbInstance
      .create_product([name, description, price, imageurl])
      .then(product => {
        res.status(200).json(product);
      })
      .catch(err => res.status(500).json(err));
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .read_product([id])
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => res.status(500).json(err));
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => res.status(500).json(err));
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { desc } = req.query;

    dbInstance
      .update_product([id, desc])
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => res.status(500).json(err));
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product([id])
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => res.status(500).json(err));
  }
};
