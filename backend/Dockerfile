# Use Microsoft's official .NET runtime image
FROM mcr.microsoft.com/dotnet/aspnet:latest as base
WORKDIR /app
EXPOSE 80

# Build the app using SDK image
FROM mcr.microsoft.com/dotnet/sdk:latest as build
WORKDIR /src
COPY ["backend.csproj", "./"]
RUN dotnet restore "./backend.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "backend.dll"]