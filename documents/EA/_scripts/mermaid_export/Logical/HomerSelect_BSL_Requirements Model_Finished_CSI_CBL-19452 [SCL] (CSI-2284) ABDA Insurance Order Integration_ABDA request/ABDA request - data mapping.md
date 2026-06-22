# ABDA request - data mapping

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ABDA request - data mapping
- **Diagram ID**: 160580
- **Elements**: 13
- **Connectors**: 10

```mermaid
classDiagram
    class BSL_Getting_Financial_Parameters_of_Contract["BSL - Getting Financial Parameters of Contract"]
    class DMS_Update_Document_to_store_vehicle_insurance["DMS - Update Document to store vehicle insurance"]
    class AbdaOrderResponse["AbdaOrderResponse"]
    class VEHICLE_INSURANCE["VEHICLE_INSURANCE"]
    class CSI_2345_DMS_New_Document_Types_for_Vehicle_Insurance_and_Ra["CSI-2345 DMS -New Document Types for Vehicle Insurance and Rapindo"]
    class ABDA_insurance_public_API["ABDA insurance public API"]
    class Getting_reference_number["Getting reference_number"]
    class DMS_Find_SCL_Documents_for_ABDA_Insurance["DMS - Find SCL.Documents for ABDA Insurance"]
    class VEHICLE_INFORMATION["VEHICLE_INFORMATION"]
    class ENGINE_NUMBER["ENGINE_NUMBER"]
    class CHASSIS_NUMBER["CHASSIS_NUMBER"]
    class BPKB_BACK["BPKB_BACK"]
    class AbdaOrderRequest["AbdaOrderRequest"]
    VEHICLE_INSURANCE ..> CSI_2345_DMS_New_Document_Types_for_Vehicle_Insurance_and_Ra : unnamed
    DMS_Update_Document_to_store_vehicle_insurance ..> VEHICLE_INSURANCE : unnamed
    DMS_Update_Document_to_store_vehicle_insurance ..> AbdaOrderResponse : unnamed
    AbdaOrderRequest ..> VEHICLE_INSURANCE : unnamed
    AbdaOrderRequest ..> VEHICLE_INFORMATION : unnamed
    AbdaOrderRequest ..> Getting_reference_number : unnamed
    AbdaOrderRequest ..> BSL_Getting_Financial_Parameters_of_Contract : unnamed
    AbdaOrderRequest ..> BPKB_BACK : unnamed
    AbdaOrderRequest ..> ENGINE_NUMBER : unnamed
    AbdaOrderRequest ..> CHASSIS_NUMBER : unnamed
```
