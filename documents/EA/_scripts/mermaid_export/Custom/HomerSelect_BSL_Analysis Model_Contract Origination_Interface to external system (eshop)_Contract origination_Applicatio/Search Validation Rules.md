# Search Validation Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules
- **Diagram ID**: 153785
- **Elements**: 6
- **Connectors**: 7

```mermaid
graph TD
    Search_application_validation_rule["Search application validation rule"]
    SearchApplicationEvent_validation_IN["SearchApplicationEvent validation -IN"]
    Mandatory["Mandatory"]
    SearchApplicationCriteria_validation_IN["SearchApplicationCriteria validation - IN"]
    SearchApplicationEvent_validation["SearchApplicationEvent validation"]
    SearchApplicationCriteria_validation["SearchApplicationCriteria validation"]
    SearchApplicationCriteria_validation -->|unnamed| SearchApplicationEvent_validation
    Search_application_validation_rule -->|unnamed| SearchApplicationCriteria_validation
    SearchApplicationCriteria_validation_IN -->|unnamed| SearchApplicationEvent_validation_IN
    SearchApplicationEvent_validation_IN -->|unnamed| Mandatory
    SearchApplicationEvent_validation_IN -->|unnamed| SearchApplicationEvent_validation
    SearchApplicationCriteria_validation_IN -->|unnamed| SearchApplicationCriteria_validation
    SearchApplicationCriteria_validation_IN -->|unnamed| Mandatory
```
