# Use Case

```mermaid
graph TD
    DELETE_Validation_Rule["DELETE Validation Rule"]
    MOD_Validation_rule_validation["{MOD}Validation rule - validation"]
    DELETE_Validation_Rule_Criteria["DELETE Validation Rule Criteria"]
    PUT_Validation_Rule["PUT Validation Rule"]
    POST_Validation_Rule_Criteria["POST Validation Rule Criteria"]
    GET_Validation_Rule["GET Validation Rule"]
    POST_Validation_Rule["POST Validation Rule"]
    DELETE_Validation_Rule_Criteria -->|unnamed| MOD_Validation_rule_validation
    PUT_Validation_Rule -->|unnamed| MOD_Validation_rule_validation
    POST_Validation_Rule_Criteria -->|unnamed| MOD_Validation_rule_validation
    GET_Validation_Rule -->|unnamed| MOD_Validation_rule_validation
    POST_Validation_Rule -->|unnamed| MOD_Validation_rule_validation
```
