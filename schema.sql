DROP TABLE IF EXISTS pups;
CREATE TABLE pups(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  breed VARCHAR(255),
  image_url VARCHAR(2000),
  description TEXT
);

INSERT INTO pups(name, breed, image_url, description)
VALUES ('Max', 'French Bulldog', 'http://cdn2-www.dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/2-whitelaying.jpg', 'Young fluff'),
('Buck', 'Mutt', 'http://www.petmd.com/sites/default/cache/imagecache/node-gallery-display/Main_2.jpg', 'Barky'),
('Fluffy', 'Pomeranian', 'http://s3.amazonaws.com/assets.prod.vetstreet.com/01/b34760827011e1b25e005056ad4734/file/Pomeranian%20004.jpg', 'Stupid'),
('Waffles', 'Pitbull', 'https://s-media-cache-ak0.pinimg.com/736x/74/3f/1c/743f1c688f78bd420865b4dff5be27d8.jpg', 'Affectionate'),
