@echo off
title BSL Explorer
echo ========================================
echo   BSL Explorer - Starting...
echo   Press Ctrl+C to stop the server
echo ========================================
echo.
python "%~dp0_bsl_app\server.py"
pause
