# PartyScoringInputDataWS - Get Fullpaths For Party Scoring

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS
- **Diagram ID**: 132802
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class n_01_196_Get_Fullpaths_For_Party_Scoring["01.196 Get Fullpaths For Party Scoring"]
    class ScoringInputDataItem["ScoringInputDataItem"]
    class GetFullpathsForPartyScoringResponse["GetFullpathsForPartyScoringResponse"]
    class GetFullpathsForPartyScoringRequest["GetFullpathsForPartyScoringRequest"]
    class AdditionalCheckInputs["AdditionalCheckInputs"]
    class PartyScoringInputDataWS["PartyScoringInputDataWS"]
    GetFullpathsForPartyScoringRequest ..> AdditionalCheckInputs : unnamed
    PartyScoringInputDataWS ..> GetFullpathsForPartyScoringRequest : unnamed
    PartyScoringInputDataWS ..> GetFullpathsForPartyScoringResponse : unnamed
    GetFullpathsForPartyScoringResponse ..> ScoringInputDataItem : unnamed
    n_01_196_Get_Fullpaths_For_Party_Scoring <|.. PartyScoringInputDataWS : unnamed
```
