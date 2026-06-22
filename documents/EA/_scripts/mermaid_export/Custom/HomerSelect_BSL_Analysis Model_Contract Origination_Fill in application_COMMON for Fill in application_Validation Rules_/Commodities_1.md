# Commodities

```mermaid
graph TD
    Conditional_obligation["Conditional obligation"]
    IMEI["IMEI"]
    Delivery_type["Delivery type"]
    Alphanumeric_character_set["Alphanumeric character set"]
    Max_length_40["Max length 40"]
    ASCII_32_to_ASCII_126["ASCII 32 to ASCII 126"]
    Max_length_50["Max length 50"]
    Mandatory["Mandatory"]
    Optional["Optional"]
    Serial_number["Serial number"]
    Model["Model"]
    Manufacturer_text_field["Manufacturer (text field)"]
    Manufacturer["Manufacturer"]
    Engine_number["Engine number"]
    Color["Color"]
    Color -->|unnamed| Mandatory
    Engine_number -->|unnamed| Alphanumeric_character_set
    Serial_number -->|unnamed| Alphanumeric_character_set
    Serial_number -->|unnamed| Max_length_40
    Engine_number -->|unnamed| Max_length_40
    Manufacturer_text_field -->|unnamed| ASCII_32_to_ASCII_126
    Model -->|unnamed| ASCII_32_to_ASCII_126
    IMEI -->|{ADD LOR-6205/}| Conditional_obligation
    Manufacturer_text_field -->|unnamed| Max_length_50
    Serial_number -->|unnamed| Optional
    IMEI -->|{DEL LOR-6205/}| Mandatory
    Manufacturer -->|unnamed| Mandatory
    Engine_number -->|unnamed| Mandatory
    Delivery_type -->|unnamed| Mandatory
    Model -->|unnamed| Mandatory
    Manufacturer_text_field -->|unnamed| Optional
    Model -->|unnamed| Max_length_50
```
