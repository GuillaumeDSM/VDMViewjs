# az group create --name myResourceGroup --location "South Central US"
# az appservice plan create --name vdmwebapp --resource-group myResourceGroup --sku FREE
rm -rf dist
npm run build
cd dist
zip -r ../web.zip *
cd ..

az webapp create --resource-group vdm_webapp --plan vdm_webapp --name $1-vdmwebapp
az webapp config appsettings set --resource-group vdm_webapp --name $1-vdmwebapp --settings WEBSITE_NODE_DEFAULT_VERSION=10.14.1

python -mwebbrowser https://$1-vdmwebapp.scm.azurewebsites.net/ZipDeployUI
python -mwebbrowser http://$1-vdmwebapp.azurewebsites.net/

# curl -T web.zip https://matthieu-vdmwebapp.scm.azurewebsites.net/ZipDeployUI
# curl https://matthieu-vdmwebapp.scm.azurewebsites.net/ZipDeployUI --output dist/web.zip