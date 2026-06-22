# Operation

```mermaid
graph TD
    MOD_Applications["{MOD}Applications"]
    EvaluateApplication["EvaluateApplication"]
    n_01_313_Evaluate_application["01.313 Evaluate application"]
    n_01_097_Cancel_application_externally["01.097 Cancel application externally"]
    Cancel["Cancel"]
    Evaluate["Evaluate"]
    BSL["BSL"]
    Application["Application"]
    Evaluate -->|unnamed| EvaluateApplication
    Evaluate -->|unnamed| n_01_313_Evaluate_application
    Cancel -->|unnamed| n_01_097_Cancel_application_externally
    Application -->|/{code}| MOD_Applications
    MOD_Applications -->|/v1/applications| BSL
    Evaluate -->|/evaluate| Application
    Cancel -->|/cancel| Application
```
