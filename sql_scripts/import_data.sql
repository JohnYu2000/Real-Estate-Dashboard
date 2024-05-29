COPY Listings(city, price, address, number_beds, number_baths, province, population, latitude, longitude, median_family_income)
FROM '/csv_files/HouseListings-Top45Cities-10292023-kaggle-clean.csv'
DELIMITER ','
CSV HEADER
ENCODING 'UTF8';