# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Access Rights
- **Diagram ID**: 80231
- **Elements**: 14
- **Connectors**: 8

```mermaid
graph TD
    n_01_570_Plan_import_of_DDM_confirmation_results_all_sales_a["01.570 Plan import of DDM confirmation results (all sales areas)"]
    n_01_530_Plan_export_of_DDM_for_confirmation_all_sales_areas["01.530 Plan export of DDM for confirmation (all sales areas)"]
    n_01_585_Automatic_import_DDM_confirmation_result["01.585 Automatic import DDM confirmation result"]
    n_01_585_Automatic_import_DDM_confirmation_result["01.585 Automatic import DDM confirmation result"]
    n_01_580_Import_DDM_confirmation_result["01.580 Import DDM confirmation result"]
    n_01_570_Plan_import_of_DDM_confirmation_results["01.570 Plan import of DDM confirmation results"]
    n_01_540_Export_DDM_for_confirmation["01.540 Export DDM for confirmation"]
    n_01_530_Plan_export_of_DDM_for_confirmation["01.530 Plan export of DDM for confirmation"]
    n_01_435_Print_DDM["01.435 Print DDM"]
    n_01_435_Print_DDM["01.435 Print DDM"]
    n_01_570_Plan_import_of_DDM_confirmation_results["01.570 Plan import of DDM confirmation results"]
    n_01_580_Import_DDM_confirmation_result["01.580 Import DDM confirmation result"]
    MOD_01_540_Export_DDM_for_confirmation["{MOD}01.540 Export DDM for confirmation"]
    n_01_530_Plan_export_of_DDM_for_confirmation["01.530 Plan export of DDM for confirmation"]
    MOD_01_540_Export_DDM_for_confirmation -->|unnamed| n_01_540_Export_DDM_for_confirmation
    n_01_585_Automatic_import_DDM_confirmation_result -->|unnamed| n_01_585_Automatic_import_DDM_confirmation_result
    n_01_435_Print_DDM -->|unnamed| n_01_435_Print_DDM
    n_01_570_Plan_import_of_DDM_confirmation_results -->|unnamed| n_01_570_Plan_import_of_DDM_confirmation_results_all_sales_a
    n_01_570_Plan_import_of_DDM_confirmation_results -->|unnamed| n_01_570_Plan_import_of_DDM_confirmation_results
    n_01_530_Plan_export_of_DDM_for_confirmation -->|unnamed| n_01_530_Plan_export_of_DDM_for_confirmation_all_sales_areas
    n_01_530_Plan_export_of_DDM_for_confirmation -->|unnamed| n_01_530_Plan_export_of_DDM_for_confirmation
    n_01_580_Import_DDM_confirmation_result -->|unnamed| n_01_580_Import_DDM_confirmation_result
```
