@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Node.js not found. Install Node.js LTS from https://nodejs.org/ then reopen this file.
 pause
 exit /b 1
)
if not exist "node_modules\@playwright\test" (
 echo Installing test dependencies...
 call npm install
 if errorlevel 1 goto :failed
)
echo Installing Chromium if needed...
call npx playwright install chromium
if errorlevel 1 goto :failed
echo Running Playwright desktop and mobile tests...
call npm test
set "RESULT=%ERRORLEVEL%"
echo.
echo Test results exit code: %RESULT%
echo Run npm run test:report to open the HTML report.
pause
exit /b %RESULT%
:failed
echo Setup failed. Check network, Node.js and browser installation.
pause
exit /b 1
