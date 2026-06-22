# CBL-25279 (CSI-3642) Automated Tagging for Standalone Insurance contracts into Cancelled Status

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-25279 (CSI-3642) Automated Tagging for Standalone Insurance contracts into Cancelled Status
- **Diagram ID**: 159796
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    PayOffResponse_PayOffResponse["PayOffResponse : PayOffResponse"]
    PayOffRequest_PayOffRequest["PayOffRequest : PayOffRequest"]
    n_01_501_Pay_off_CEL_contract_from_external_system["01.501 Pay-off CEL contract from external system"]
    Check_pay_off_possibility_algorithm_GUI_RMQ["Check pay-off possibility algorithm (GUI/RMQ)"]
    REQ_1_Cancel_Insurance_Contract["REQ#1 Cancel Insurance Contract"]
    n_01_501_Pay_off_CEL_contract_from_external_system -->|unnamed| Check_pay_off_possibility_algorithm_GUI_RMQ
```
