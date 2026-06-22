# BundleSearchParametersDto

```mermaid
classDiagram
    class Bundles_Bundles["Bundles : Bundles"]
    class ADD_ServiceTypePreferencesDto["{ADD}ServiceTypePreferencesDto"]
    class ADD_ServicePreferencesDto["{ADD}ServicePreferencesDto"]
    class ADD_PreferenceType["{ADD}PreferenceType"]
    class ADD_BundleSearchParametersDto["{ADD}BundleSearchParametersDto"]
    ADD_ServiceTypePreferencesDto --> ADD_PreferenceType : unnamed
    ADD_ServicePreferencesDto --> ADD_PreferenceType : unnamed
    ADD_BundleSearchParametersDto --> ADD_ServicePreferencesDto : unnamed
    ADD_BundleSearchParametersDto --> ADD_ServiceTypePreferencesDto : unnamed
```
