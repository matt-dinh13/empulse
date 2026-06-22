# Use Case

```mermaid
graph TD
    ADD_01_197_Get_Previous_applications_data["{ADD} 01.197 Get Previous applications data"]
    Structure_of_PartyScoringInputDataWS_response["Structure of PartyScoringInputDataWS response"]
    n_01_196_Get_Fullpaths_For_Party_Scoring["01.196 Get Fullpaths For Party Scoring"]
    External_system["External system"]
    n_01_195_Get_Party_Scoring_Input_Data["01.195 Get Party Scoring Input Data"]
    n_01_195_Get_Party_Scoring_Input_Data -->|unnamed| Structure_of_PartyScoringInputDataWS_response
    n_01_196_Get_Fullpaths_For_Party_Scoring -->|unnamed| Structure_of_PartyScoringInputDataWS_response
    External_system -->|unnamed| n_01_196_Get_Fullpaths_For_Party_Scoring
    External_system -->|unnamed| n_01_195_Get_Party_Scoring_Input_Data
```
