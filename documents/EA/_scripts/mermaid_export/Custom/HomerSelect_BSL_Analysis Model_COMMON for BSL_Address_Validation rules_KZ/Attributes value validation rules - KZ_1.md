# Attributes value validation rules - KZ

```mermaid
graph TD
    Latin_alphabet["Latin alphabet"]
    Length_255["Length ‹= 255"]
    Individual_latin_characters["Individual latin characters"]
    Town_value["Town value"]
    District_register["District register"]
    Additional_allowed_characters["Additional allowed characters"]
    Length_60["Length ‹= 60"]
    ZIP_Code_register["ZIP Code register"]
    Length_30["Length ‹= 30"]
    Only_digits["Only digits"]
    Autocompletion["Autocompletion"]
    Region_register["Region register"]
    Length_7["Length 7"]
    ZIP_code["ZIP code"]
    Town["Town"]
    Region["Region"]
    House_number["House number"]
    Flat["Flat"]
    District["District"]
    Length_20["Length ‹= 20"]
    Cyrilic_alphabet_character_set["Cyrilic alphabet character set"]
    Street_name["Street name"]
    Town -->|{DEL LOR-4678}| Length_30
    ZIP_code -->|unnamed| Length_7
    House_number -->|{DEL LOR-4910}| Length_20
    House_number -->|{ADD LOR-4910}| Length_60
    Region -->|unnamed| Region_register
    Region -->|unnamed| Autocompletion
    Town -->|unnamed| Latin_alphabet
    House_number -->|unnamed| Additional_allowed_characters
    Town -->|unnamed| Autocompletion
    House_number -->|unnamed| Cyrilic_alphabet_character_set
    Town -->|unnamed| Town_value
    Town -->|{DEL LOR-4678/}| Individual_latin_characters
    Town -->|unnamed| Cyrilic_alphabet_character_set
    ZIP_code -->|unnamed| ZIP_Code_register
    ZIP_code -->|unnamed| Only_digits
    ZIP_code -->|unnamed| Autocompletion
    Town -->|unnamed| Length_60
    District -->|unnamed| Length_30
    Street_name -->|unnamed| Autocompletion
    Street_name -->|unnamed| Additional_allowed_characters
    Street_name -->|unnamed| Cyrilic_alphabet_character_set
    Street_name -->|{DEL LOR-4910}| Length_30
    Street_name -->|unnamed| Length_255
    District -->|unnamed| District_register
    House_number -->|unnamed| Latin_alphabet
    District -->|unnamed| Cyrilic_alphabet_character_set
    Street_name -->|unnamed| Latin_alphabet
    District -->|unnamed| Autocompletion
    Flat -->|unnamed| Latin_alphabet
    Flat -->|unnamed| Cyrilic_alphabet_character_set
    Flat -->|{DEL LOR-4910}| Length_20
    Flat -->|unnamed| Additional_allowed_characters
    Flat -->|{ADD LOR-4910}| Length_60
    District -->|unnamed| Individual_latin_characters
```
