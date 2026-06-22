# Create

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Management
- **Diagram ID**: 163838
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class Contract_Negotiation_Process_Type["Contract Negotiation Process Type"]
    class ADD_Process_type["{ADD}Process type"]
    class MOD_Applications["{MOD}Applications"]
    class CreateAndEvaluate["CreateAndEvaluate"]
    class Representation_Application["Representation : Application"]
    class CreateAndEvaluateApplication["CreateAndEvaluateApplication"]
    class n_01_095_Create_and_evaluate_application["01.095 Create and evaluate application"]
    class AbstractApplicationRestTO["AbstractApplicationRestTO"]
    class Application["Application"]
    class BSL["BSL"]
    CreateAndEvaluate ..> ADD_Process_type : unnamed
    BSL o-- MOD_Applications : /v1/applications
    AbstractApplicationRestTO <|-- CreateAndEvaluateApplication : unnamed
    Representation_Application --> AbstractApplicationRestTO : unnamed
    n_01_095_Create_and_evaluate_application <|.. Application : unnamed
    Application ..> CreateAndEvaluate : unnamed
    CreateAndEvaluate o-- CreateAndEvaluateApplication : unnamed
    MOD_Applications o-- Application : /{code}
    ADD_Process_type ..> Contract_Negotiation_Process_Type : based on
```
