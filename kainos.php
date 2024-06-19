<?php 

include("database.php");

$sql = "SELECT `Eil. Nr.`, `Procedūra`, `Trukmė`, `Kaina` FROM `kainos`";
$result = $conn->query($sql);

?>

<div id="navbar">
      <a href="index.php">Pradžia</a>
      <a href="straipsniai.php">Straipsniai</a>
      <a href="visiKlientai.php">Galerija</a>
      <a href="kontaktai.php">Kontaktai</a>
</div>

<div class="block">
<div class="content pt-5 pb-5">
   <div class="container">
      <div class="row">
      </div>
      <div class="row">
         <div class="col">
            <?php 
               if ($result->num_rows > 0) {
            ?>
            <table class="table table-hover">
                  <thead>
                     <tr>
                        <th scope="col"></th>
                        <th scope="col">Eil. Nr.</th>
                        <th scope="col">Procedūra</th>
                        <th scope="col">Trukmė</th>
                        <th scope="col">Kaina</th>
                     </tr>
                  </thead>
               <tbody>
                  <?php 
                     while($bookData = $result->fetch_assoc()) {
                  ?>
                     <tr>
                        <th scope="row"></th>
                        <td><?php echo $bookData['Eil. Nr.']; ?></td>
                        <td><?php echo $bookData['Procedūra']; ?></td>
                        <td><?php echo $bookData['Trukmė']; ?></td>
                        <td><?php echo $bookData['Kaina']; ?></td>
                     </tr>
                  <?php } ?>
               </tbody>
            </table>
            <?php
               } else {
                  echo "<p>Kol kas nėra įvestų knygų.</p>";
               }
            ?>
         </div>
      </div>
   </div>
</div>
</div>