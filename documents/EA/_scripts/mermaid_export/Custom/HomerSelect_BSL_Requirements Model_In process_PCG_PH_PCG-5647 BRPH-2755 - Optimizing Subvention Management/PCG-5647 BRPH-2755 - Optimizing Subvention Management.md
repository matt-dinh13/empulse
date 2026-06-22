# PCG-5647 BRPH-2755 - Optimizing Subvention Management

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5647 BRPH-2755 - Optimizing Subvention Management
- **Diagram ID**: 164208
- **Elements**: 8
- **Connectors**: 1

```mermaid
graph TD
    Logical_Data_Model_Subventions["Logical Data Model : Subventions"]
    Logical_Data_Model_Financing_Package_Criterion["Logical Data Model : Financing Package Criterion"]
    Logical_Data_Model_Subvention_Scheme["Logical Data Model : Subvention Scheme"]
    MOD_Financing_Package_Criterion_Type["{MOD}Financing Package Criterion Type"]
    Subvention_Scheme["Subvention Scheme"]
    Financing_Package_Subvention["Financing Package Subvention"]
    MOD_Subvention["{MOD}Subvention"]
    PCG_5651_BRPH_2755_Optimizing_Subvention_management["PCG-5651 BRPH-2755 Optimizing Subvention management"]
    Financing_Package_Subvention -->|unnamed| Subvention_Scheme
```
