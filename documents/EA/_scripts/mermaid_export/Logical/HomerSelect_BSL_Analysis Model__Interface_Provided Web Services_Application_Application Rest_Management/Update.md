# Update

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/Application Rest/Management
- **Diagram ID**: 163840
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class MOD_Applications["{MOD}Applications"]
    class MOD_01_310_Update_application_v9["{MOD}01.310 Update application v9"]
    class Representation_Application["Representation : Application"]
    class AbstractApplicationRestTO["AbstractApplicationRestTO"]
    class Update["Update"]
    class UpdateApplication["UpdateApplication"]
    class BSL["BSL"]
    class Application["Application"]
    BSL o-- MOD_Applications : /v1/applications
    Update o-- UpdateApplication : unnamed
    Application ..> Update : unnamed
    Representation_Application --> AbstractApplicationRestTO : unnamed
    AbstractApplicationRestTO <|-- UpdateApplication : unnamed
    MOD_01_310_Update_application_v9 <|.. Application : unnamed
    MOD_Applications o-- Application : /{code}
```
