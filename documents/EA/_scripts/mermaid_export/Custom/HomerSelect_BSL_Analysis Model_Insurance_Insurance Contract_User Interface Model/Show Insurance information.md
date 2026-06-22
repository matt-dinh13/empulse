# Show Insurance information

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/User Interface Model
- **Diagram ID**: 153465
- **Elements**: 9
- **Connectors**: 2

```mermaid
graph TD
    n_08_010_Show_service_information["08.010 Show service information"]
    Service_description["Service description"]
    Tab_Insurance["Tab-Insurance"]
    OK["OK"]
    Service_code["Service code"]
    Service_name["Service name"]
    Service_type["Service type"]
    Insurance_Program_description["Insurance Program description"]
    Insurance_information["Insurance information"]
    Tab_Insurance -->|unnamed| Insurance_information
    Insurance_information -->|unnamed| n_08_010_Show_service_information
```
