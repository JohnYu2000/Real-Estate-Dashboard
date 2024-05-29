import csv

input_file = 'HouseListings-Top45Cities-10292023-kaggle.csv'
output_file = 'HouseListings-Top45Cities-10292023-kaggle-clean.csv'

def is_valid_utf8(text):
    try:
        text.encode('utf-8')
        return True
    except UnicodeEncodeError:
        return False

def row_is_valid(row):
    return all(is_valid_utf8(cell) for cell in row)

with open(input_file, mode='r', encoding='ISO-8859-1') as infile, open(output_file, mode='w', encoding='utf-8', newline='') as outfile:
    reader = csv.reader(infile)
    writer = csv.writer(outfile)
    header = next(reader)
    writer.writerow(header)
    for row in reader:
        if row_is_valid(row):
            writer.writerow(row)

print("Cleaning completed. Invalid rows have been removed.")
