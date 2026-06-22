# RestAPI

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Scoring Input Data/RestAPI
- **Diagram ID**: 155802
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class ADD_PreviousApplicationDetailsResponseTO["{ADD} PreviousApplicationDetailsResponseTO"]
    class BSL["BSL"]
    class ADD_01_197_Get_Previous_applications_data["{ADD} 01.197 Get Previous applications data"]
    class ADD_PreviousApplicationDetails["{ADD} PreviousApplicationDetails"]
    class ADD_ScoringInputData["{ADD} ScoringInputData"]
    ADD_ScoringInputData o-- ADD_PreviousApplicationDetails : /contractCodes
    ADD_01_197_Get_Previous_applications_data <|.. ADD_PreviousApplicationDetails : unnamed
    ADD_PreviousApplicationDetails --> ADD_PreviousApplicationDetailsResponseTO : unnamed
    BSL o-- ADD_ScoringInputData : /v1/scoringInputData
```
