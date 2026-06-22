# AF configuration

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Logical Data Model/AF configuration
- **Diagram ID**: 150061
- **Elements**: 8
- **Connectors**: 5

```mermaid
classDiagram
    class AF_Element_Prefill_Configuration["AF Element Prefill Configuration"]
    class Application_Form_Scope["Application Form Scope"]
    class Data_Block_Type["Data Block Type"]
    class Application_Form_Configuration["Application Form Configuration"]
    class Contract_origination_Type["Contract origination Type"]
    class AF_Prefill_Source["AF Prefill Source"]
    class AF_Element_Configuration["AF Element Configuration"]
    AF_Element_Configuration o-- AF_Element_Prefill_Configuration : unnamed
    AF_Element_Prefill_Configuration ..> AF_Prefill_Source : unnamed
    Application_Form_Configuration ..> Contract_origination_Type : unnamed
    Application_Form_Configuration ..> Data_Block_Type : unnamed
    Application_Form_Configuration ..> Application_Form_Scope : unnamed
```
