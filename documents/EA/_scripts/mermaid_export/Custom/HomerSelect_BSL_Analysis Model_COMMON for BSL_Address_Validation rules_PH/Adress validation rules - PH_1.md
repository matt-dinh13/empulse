# Adress validation rules - PH

```mermaid
graph TD
    Length_90["Length 90"]
    Length_255["Length 255"]
    Allowed_characters_extended_set["Allowed characters (extended set)"]
    Unit_floor_building_name_and_no_street_name["Unit, floor, building name and no., street name"]
    DistrictRegister["DistrictRegister"]
    Length10["Length10"]
    Length_50["Length 50"]
    Filipino_alphabet["Filipino alphabet"]
    Allowed_characters["Allowed characters"]
    Allowed_characters_Floor["Allowed characters (Floor)"]
    Allowed_characters_Flat_House_number["Allowed characters (Flat, House number)"]
    Zip_code_format["Zip code format"]
    Zip_code_register["Zip code register"]
    Double_space_forbidden["Double space forbidden"]
    Autocompletion["Autocompletion"]
    Sub_district_register["Sub-district register"]
    Town_register["Town register"]
    Mandatory["Mandatory"]
    Zip_code["Zip code"]
    Flat["Flat"]
    Street_name["Street name"]
    District["District"]
    Sub_disctrict["Sub-disctrict"]
    Landmark["Landmark"]
    Floor["Floor"]
    House_number["House number"]
    Block["Block"]
    Town["Town"]
    Block -->|unnamed| Length_50
    House_number -->|unnamed| Allowed_characters_Flat_House_number
    Flat -->|unnamed| Allowed_characters_Flat_House_number
    Floor -->|unnamed| Allowed_characters_Floor
    Sub_disctrict -->|unnamed| Allowed_characters
    Town -->|unnamed| Allowed_characters
    Landmark -->|{ADD LOR-5161/}| Allowed_characters
    Block -->|unnamed| Allowed_characters
    Street_name -->|unnamed| Allowed_characters
    Unit_floor_building_name_and_no_street_name -->|unnamed| Length_90
    Allowed_characters -->|unnamed| Filipino_alphabet
    Town -->|unnamed| Double_space_forbidden
    Town -->|unnamed| Length_50
    Street_name -->|unnamed| Length_50
    Sub_disctrict -->|unnamed| Length_50
    House_number -->|unnamed| Length10
    Floor -->|unnamed| Length10
    Flat -->|unnamed| Length10
    District -->|unnamed| DistrictRegister
    Unit_floor_building_name_and_no_street_name -->|unnamed| Allowed_characters_extended_set
    Landmark -->|unnamed| Length_255
    Allowed_characters_extended_set -->|unnamed| Filipino_alphabet
    Zip_code -->|unnamed| Autocompletion
    District -->|unnamed| Mandatory
    Town -->|unnamed| Mandatory
    Zip_code -->|unnamed| Mandatory
    House_number -->|unnamed| Mandatory
    Floor -->|unnamed| Mandatory
    Unit_floor_building_name_and_no_street_name -->|unnamed| Mandatory
    Street_name -->|unnamed| Mandatory
    Town -->|unnamed| Town_register
    Sub_disctrict -->|unnamed| Sub_district_register
    Zip_code -->|unnamed| Zip_code_format
    Sub_disctrict -->|unnamed| Autocompletion
    Zip_code -->|unnamed| Zip_code_register
    Sub_disctrict -->|unnamed| Double_space_forbidden
    Flat -->|unnamed| Double_space_forbidden
    Block -->|unnamed| Double_space_forbidden
    Landmark -->|unnamed| Double_space_forbidden
    Street_name -->|unnamed| Double_space_forbidden
    House_number -->|unnamed| Double_space_forbidden
    Unit_floor_building_name_and_no_street_name -->|unnamed| Double_space_forbidden
    Floor -->|unnamed| Double_space_forbidden
    Sub_disctrict -->|unnamed| Mandatory
    Town -->|unnamed| Autocompletion
```
