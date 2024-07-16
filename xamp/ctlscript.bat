@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist E:\YASH\login Database\xamp\hypersonic\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\server\hsql-sample-database\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\ingres\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\ingres\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\mysql\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\mysql\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\postgresql\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\postgresql\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\apache\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\apache\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\openoffice\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\openoffice\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\apache-tomcat\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\apache-tomcat\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\resin\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\resin\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\jetty\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\jetty\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\subversion\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist E:\YASH\login Database\xamp\lucene\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\lucene\scripts\ctl.bat START)
if exist E:\YASH\login Database\xamp\third_application\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist E:\YASH\login Database\xamp\third_application\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\third_application\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\lucene\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist E:\YASH\login Database\xamp\subversion\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\subversion\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\jetty\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\jetty\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\hypersonic\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\resin\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\resin\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT E:\YASH\login Database\xamp\apache-tomcat\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\openoffice\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\openoffice\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\apache\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\apache\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\ingres\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\ingres\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\mysql\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\mysql\scripts\ctl.bat STOP)
if exist E:\YASH\login Database\xamp\postgresql\scripts\ctl.bat (start /MIN /B E:\YASH\login Database\xamp\postgresql\scripts\ctl.bat STOP)

:end

