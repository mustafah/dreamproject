import math
import os
import sys
import jsmin
import re

def compile_filenames(input_string):
    # Split the input string by whitespace
    parts = input_string.strip().split("+")
    
    # The first part is the base filename
    base_filepath = parts[0]
    
    # The rest are suffixes prefixed with '+'
    # suffixes = [part[1:] for part in parts[1:] if part.startswith('+')]
    suffixes = parts[1:]
    
    base_directory, base_filename = os.path.split(base_filepath)

    # Get the extension of the base filename
    base_file_title, base_extension = os.path.splitext(base_filename)

    base_file_title = re.sub(r'^I', '', base_file_title)

    # Generate the filenames
    filenames = [base_filepath]

    # Create all combinations of suffixes
    for suffix in suffixes:
        # Create new filename by appending suffix to the base name
        new_filename = f"{base_file_title}{suffix}{base_extension}"
        filenames.append(new_filename)

    return filenames

print(compile_filenames("C:\FEGeosteeringUI\Addin_Gridding\Sources\Gridding.Presentation.UnitTest\Logic\ViewModels\Setups\FEGeosteering\PreLanding\IPreLandingLogCorrelationViewModelSetup.cs+Test+Testing"))