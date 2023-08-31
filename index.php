<?php 
    //Obtêm o número de visitas atual --> lê o arquivo
    $numeroDeVisitas = file_get_contents('arq.in');
    //Lê o conteúdo do arquivo arq.in     

    file_put_contents('arq.in', ++$numeroDeVisitas);
    //Aumente em 1 o conteúdo do arquivo .in

    //Mostra o numero de visitas


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sei la</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
</head>
<body>
    <main>
        <img src="assets/logo.jpg" alt="" srcset="">
        <div class="card bg-dark">
            <h4 class="card-header">Sobre nós:</h4>
            <div class="card-body">
                <p class="card-text">Somos um blog que cobre o Brasileirão, trazendo estatíscas, tabelas e a rodada da semana.</p>
                <a href="content/index.html"><button class="btn btn-success">Veja mais</button></a>
            </div>
        </div>
            
        <div class="contador bg-dark">
            <h6>Contador de visitas:</h6>
            <h4><?php echo $numeroDeVisitas; ?></h4>
        </div>
    </main>
</body>
</html>