CALL npm run build

CALL az webapp create --resource-group VDMResourceGroup --plan vdmwebapp --name %1-vdmwebapp --subscription POC-Fablab
CALL az webapp config appsettings set --resource-group VDMResourceGroup --name %1-vdmwebapp --settings WEBSITE_NODE_DEFAULT_VERSION=10.14.1 --subscription POC-Fablab

python zip.py

python -mwebbrowser https://%1-vdmwebapp.scm.azurewebsites.net/ZipDeployUI
python -mwebbrowser http://%1-vdmwebapp.azurewebsites.net/
