# Common for AF

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/PH/Common for AF
- **Diagram ID**: 122203
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph TD
    Mandatory["Mandatory"]
    ASCII_32_to_ASCII_126["ASCII 32 to ASCII 126"]
    Name_character_set["Name character set"]
    Filipino_alphabet["Filipino alphabet"]
    General_phone_number["General phone number"]
    Any_phone["Any phone"]
    Max_length_50["Max length 50"]
    Any_phone -->|unnamed| General_phone_number
    Name_character_set -->|unnamed| Filipino_alphabet
```
