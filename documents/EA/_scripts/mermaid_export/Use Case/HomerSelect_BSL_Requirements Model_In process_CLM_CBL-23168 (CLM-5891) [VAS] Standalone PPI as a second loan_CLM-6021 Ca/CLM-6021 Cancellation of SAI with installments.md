# CLM-6021 Cancellation of SAI with installments

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan/CLM-6021 Cancellation of SAI with installments
- **Diagram ID**: 156582
- **Elements**: 7
- **Connectors**: 4

```mermaid
graph LR
    External_system[/"External system"/]
    n_01_360_Cancel_contract(("01.360 Cancel contract"))
    User[/"User"/]
    n_01_333_Cancel_active_contract_service(("01.333 Cancel active contract service"))
    n_01_590_Cancel_active_contract_manually(("01.590 Cancel active contract manually"))
    n_01_332_Cancel_signed_contract_service(("01.332 Cancel signed contract service"))
    n_01_330_Cancel_signed_contract_manually(("01.330 Cancel signed contract manually"))
    n_01_330_Cancel_signed_contract_manually --- User
    n_01_590_Cancel_active_contract_manually --- User
    External_system --- n_01_332_Cancel_signed_contract_service
    External_system --- n_01_333_Cancel_active_contract_service
```
